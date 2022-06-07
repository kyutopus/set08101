############## BASIC #############

# label your commits
git config --global user.name "kyutopus"

# associate with git account
git config --global user.email "kyutopus@protonmail.com"

# clone a repository
git clone https://github.com/kyutopus/set08101.git

# enter repository directory
# you can only do git commands in this directory.
cd set08101

# see what has been happening with the repository
git status

# cach changes to repository
git add .

# commit to the history record for the repository with a note
git commit -m "a commit message"

# see the list of messages
git log

# push changes to remote repository on GitHub
git push

############### STRUCTURE #################

# Clone the repository to your local machine
git clone <url>

######### Get into local directory #########
# push to remote repository
git push

# get latest version of repository
git pull
