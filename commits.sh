
# Number of commits to create
commit_count=2483

# Function to generate a random date within the past 2483 days
random_date() {
  echo $(date -d "$((RANDOM % 2483 + 1)) days ago" '+%Y-%m-%d %H:%M:%S')
}

# Create the specified number of commits
for i in $(seq 1 $commit_count)
do
  # Create a random file
  filename="file_$i.txt"
  echo "This is commit number $i" > $filename

  # Add the file to git
  git add $filename

  # Commit with a random date
  GIT_COMMITTER_DATE="$(random_date)" git commit -m "Commit number $i" --date "$(random_date)"
done

# Push the changes
git push origin main
