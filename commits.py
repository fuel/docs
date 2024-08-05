import os
import random
from datetime import datetime, timedelta
from git import Repo
import calendar

# Set the path to the repository
repo_path = "C:\\Users\\Admin\\Documents\\Escron Upgrade\\docs"
if not os.path.exists(repo_path):
    # Create a new repository if it doesn't exist
    Repo.init(repo_path)
repo = Repo(repo_path)

# Define the date range for commits
start_date = datetime(2016, 1, 1)
end_date = datetime.now()

# Define the date range for 20 commits per month from December 2017
december_2017 = datetime(2017, 12, 1)

# Define random commit messages
commit_messages = [
    "Fixed bug", "Updated README", "Refactored code", "Added new feature",
    "Improved performance", "Fixed typos", "Added unit tests",
    "Fixed a typo in the documentation", "Refactored function for better readability",
    "Added new API endpoint for user login", "Updated dependencies to latest versions",
    "Improved error handling in payment processing", "Optimized image loading speed",
    "Added unit tests for the auth module", "Fixed CSS issues on the homepage",
    "Implemented caching for faster load times", "Removed unused imports",
    "Updated README with setup instructions", "Improved mobile responsiveness",
    "Fixed issue with data serialization", "Added new feature for exporting reports",
    "Reorganized project structure", "Implemented user authentication",
    "Fixed bug in date parsing logic", "Added logging for debugging",
    "Updated translations for French locale", "Improved performance of search functionality",
    "Removed deprecated API calls", "Fixed broken links in the footer",
    "Updated UI components library", "Added validation for user input fields",
    "Implemented dark mode theme", "Fixed memory leak in data processing",
    "Improved accessibility for screen readers", "Added support for multiple languages",
    "Refactored database schema", "Implemented email notifications",
    "Fixed bug in pagination logic", "Updated user profile page layout",
    "Added feature to import data from CSV", "Improved security by encrypting passwords",
    "Fixed race condition in multithreaded code", "Updated project dependencies",
    "Improved error messages for users", "Added support for OAuth2 authentication",
    "Fixed layout issues on the dashboard", "Updated API documentation",
    "Added new unit tests for validation module", "Improved code comments and documentation",
    "Fixed issue with session expiration", "Added new payment gateway integration",
    "Improved load times on the product page", "Refactored middleware for better performance",
    "Fixed issue with file uploads", "Updated user roles and permissions",
    "Added new analytics tracking", "Fixed bug in search indexing",
    "Improved navigation bar design", "Implemented server-side rendering",
    "Fixed issue with timezone conversion", "Added feature to reset user passwords",
    "Improved database query efficiency", "Fixed bug in email sending logic",
    "Updated terms and conditions page", "Added support for WebSocket connections",
    "Improved handling of edge cases", "Fixed issue with user avatar uploads",
    "Updated favicon and logo", "Added new filter options in search",
    "Improved error reporting in logs", "Fixed CSS alignment issues",
    "Added feature to export user data", "Refactored authentication module",
    "Improved UI for account settings", "Fixed issue with form validation",
    "Added new dashboard widgets", "Updated third-party API integrations",
    "Improved performance of data import", "Fixed bug in user registration flow",
    "Added support for push notifications", "Improved code linting rules",
    "Fixed issue with database migrations", "Updated footer with new links",
    "Added feature to favorite items", "Improved data visualization on charts",
    "Fixed issue with duplicate records", "Updated privacy policy page",
    "Added new icons and assets", "Improved data export functionality",
    "Fixed bug in cart functionality", "Added feature to track user activity",
    "Improved load balancing configuration", "Fixed issue with payment refunds",
    "Updated social media links", "Added feature to customize notifications",
    "Improved API response times", "Fixed issue with language selection",
    "Added new product categories", "Improved UX for onboarding process",
    "Fixed bug in password reset flow", "Updated site meta tags for SEO",
    "Added feature to archive items", "Improved handling of large files",
    "Fixed issue with email templates", "Updated cookie consent banner",
    "Added new customer support chat", "Improved responsiveness of modal windows",
]

# Function to create random commits
def create_random_commit(repo, date, message):
    # Modify a file or create a new one
    filename = os.path.join(repo_path, "file.txt")
    with open(filename, "a") as f:
        f.write(f"{message}\n")
    
    # Stage the changes
    repo.index.add([filename])
    
    # Commit the changes with a specific date
    author_date = date.strftime('%Y-%m-%d %H:%M:%S')
    repo.index.commit(message, author_date=author_date, commit_date=author_date)

# Generate commits
current_date = start_date
while current_date <= end_date:
    # Determine the number of commits for the current month
    if current_date >= december_2017:
        num_commits = max(20, random.randint(20, 50))
    else:
        num_commits = random.randint(1, 10)
    
    # Create the commits
    for _ in range(num_commits):
        # Select a random day within the month
        _, days_in_month = calendar.monthrange(current_date.year, current_date.month)
        random_day = random.randint(0, days_in_month - 1)
        commit_date = current_date + timedelta(days=random_day)
        
        # Select a random commit message
        message = random.choice(commit_messages)
        
        # Create the commit
        create_random_commit(repo, commit_date, message)
    
    # Move to the next month
    if current_date.month == 12:
        current_date = datetime(current_date.year + 1, 1, 1)
    else:
        current_date = datetime(current_date.year, current_date.month + 1, 1)

# Push the commits to the remote repository
repo.remote().push()
