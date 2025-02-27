#!/usr/bin/env bash
set -euox pipefail

# For debugging
ls "$TARGET_DIR/release" "$TARGET_DIR/release/bundle/msi"

# Used for release artifact
# In release mode the name comes from tauri.conf.json
cp "$TARGET_DIR/release/Firezone.exe" "$BINARY_DEST_PATH.exe"
cp "$TARGET_DIR"/release/bundle/msi/*.msi "$BINARY_DEST_PATH.msi"
cp "$TARGET_DIR/release/firezone_gui_client.pdb" "$BINARY_DEST_PATH.pdb"

function make_hash() {
    sha256sum "$1" >"$1.sha256sum.txt"
}

make_hash "$BINARY_DEST_PATH.exe"
make_hash "$BINARY_DEST_PATH.msi"
make_hash "$BINARY_DEST_PATH.pdb"
