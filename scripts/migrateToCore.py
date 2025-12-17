#!/usr/bin/env python3
"""
Migration script to convert all @react-map packages to use @react-map/core.

This script:
1. Replaces the main component file (e.g., Usa.tsx) with a simple factory call
2. Updates index.ts to re-export types from @react-map/core
3. Adds @react-map/core as a dependency in package.json
4. Removes the hooks/mouseTrack.ts file
"""

import os
import json
import re
import shutil

PACKAGES_DIR = "/home/ugly/repos/react-map/packages"
SKIP_PACKAGES = {"core", "india"}  # core is the source, india is already migrated


def get_component_name(package_name: str) -> str:
    """Convert package name to PascalCase component name."""
    # Handle special cases
    special_cases = {
        "usa": "Usa",
        "uk": "Uk",
        "uae": "Uae",
        "drc": "Drc",
    }
    if package_name.lower() in special_cases:
        return special_cases[package_name.lower()]

    # Convert camelCase to PascalCase
    return package_name[0].upper() + package_name[1:]


def create_component_file(package_path: str, component_name: str) -> str:
    """Generate the new component file content."""
    return f"""import React from 'react';
import {{ createMapComponent }} from '@react-map/core';
import type {{ MapProps }} from '@react-map/core';
import {{ drawPath, stateCode, constants }} from './constants';

/**
 * Interactive SVG map component for React
 */
const {component_name}: React.FC<MapProps> = createMapComponent({{
  name: '{component_name}',
  drawPath,
  stateCode,
  constants,
}});

export default {component_name};
export type {component_name}Props = MapProps;
"""


def create_index_file(component_name: str) -> str:
    """Generate the new index.ts file content."""
    return f"""import {component_name} from './{component_name}';
export type {{ {component_name}Props }} from './{component_name}';
export type {{
  TooltipRenderProps,
  ZoomPanControls,
  ControlsPosition,
  BorderStyle,
  RegionColorMap,
}} from '@react-map/core';
export default {component_name};
"""


def update_package_json(package_json_path: str) -> bool:
    """Add @react-map/core dependency to package.json."""
    try:
        with open(package_json_path, "r") as f:
            data = json.load(f)

        # Add dependencies section if it doesn't exist
        if "dependencies" not in data:
            data["dependencies"] = {}

        # Add @react-map/core dependency
        data["dependencies"]["@react-map/core"] = "^1.0.0"

        with open(package_json_path, "w") as f:
            json.dump(data, f, indent=2)
            f.write("\n")

        return True
    except Exception as e:
        print(f"  Error updating package.json: {e}")
        return False


def find_component_file(src_path: str) -> tuple[str, str] | None:
    """Find the main component file in src directory."""
    if not os.path.exists(src_path):
        return None

    for filename in os.listdir(src_path):
        if filename.endswith(".tsx") and filename != "index.tsx":
            name = filename[:-4]  # Remove .tsx
            return (os.path.join(src_path, filename), name)

    return None


def migrate_package(package_name: str) -> bool:
    """Migrate a single package to use @react-map/core."""
    package_path = os.path.join(PACKAGES_DIR, package_name)
    src_path = os.path.join(package_path, "src")

    # Find the component file
    result = find_component_file(src_path)
    if not result:
        print(f"  Skipping: No component file found")
        return False

    component_file, component_name = result

    # Check if constants.ts exists
    constants_file = os.path.join(src_path, "constants.ts")
    if not os.path.exists(constants_file):
        print(f"  Skipping: No constants.ts found")
        return False

    # 1. Replace the component file
    new_component_content = create_component_file(package_path, component_name)
    with open(component_file, "w") as f:
        f.write(new_component_content)
    print(f"  ✓ Updated {component_name}.tsx")

    # 2. Update index.ts
    index_file = os.path.join(src_path, "index.ts")
    new_index_content = create_index_file(component_name)
    with open(index_file, "w") as f:
        f.write(new_index_content)
    print(f"  ✓ Updated index.ts")

    # 3. Update package.json
    package_json_path = os.path.join(package_path, "package.json")
    if update_package_json(package_json_path):
        print(f"  ✓ Updated package.json")

    # 4. Remove hooks directory if it exists
    hooks_path = os.path.join(src_path, "hooks")
    if os.path.exists(hooks_path):
        shutil.rmtree(hooks_path)
        print(f"  ✓ Removed hooks/ directory")

    return True


def main():
    """Main migration function."""
    print("=" * 60)
    print("Migrating @react-map packages to use @react-map/core")
    print("=" * 60)

    # Get all package directories
    packages = sorted(
        [
            d
            for d in os.listdir(PACKAGES_DIR)
            if os.path.isdir(os.path.join(PACKAGES_DIR, d)) and d not in SKIP_PACKAGES
        ]
    )

    print(f"\nFound {len(packages)} packages to migrate\n")

    success_count = 0
    fail_count = 0

    for package_name in packages:
        print(
            f"[{success_count + fail_count + 1}/{len(packages)}] Migrating {package_name}..."
        )

        try:
            if migrate_package(package_name):
                success_count += 1
            else:
                fail_count += 1
        except Exception as e:
            print(f"  Error: {e}")
            fail_count += 1

    print("\n" + "=" * 60)
    print(f"Migration complete!")
    print(f"  Success: {success_count}")
    print(f"  Failed:  {fail_count}")
    print("=" * 60)

    if success_count > 0:
        print("\nNext steps:")
        print("  1. Run 'npm install' to link dependencies")
        print("  2. Run 'npx lerna run build' to build all packages")
        print("  3. Test a few packages to verify they work")


if __name__ == "__main__":
    main()
