#!/bin/bash

# Check if arguments are provided
if [ $# -ne 2 ]; then
    echo "Usage: $0 folder_name target_folder"
    exit 1
fi

# Extract folder names from the input arguments
folder_name=$1
target_folder=$2

# Create target folder if it doesn't exist
if [ ! -d "$target_folder" ]; then
    mkdir -p "$target_folder"
fi

# Create folder
mkdir "${target_folder}/${folder_name}"

# Sample content
sample_content="# ${folder_name}.mdx

### Sectiion 1
Lorem ipsum...

### Section 2
Lorem ipsum...
"

# Create files with sample content
echo "$sample_content" > "${target_folder}/${folder_name}/${folder_name}.de.mdx"
echo "$sample_content" > "${target_folder}/${folder_name}/${folder_name}.en.mdx"
echo "$sample_content" > "${target_folder}/${folder_name}/${folder_name}.pt.mdx"

echo "Folder '$folder_name' and files created successfully in '$target_folder'."
