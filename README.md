# React-Native-SDK-Booking-House-Cleaning-Btaskee


## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.


## Documents

* create a folder assets containing images and documents .png

* create a component folder containing .js documents to write separate features and functions for easy use and efficient code management

* create a contants folder to use the available configs for better coding and source code management 

* create a help directory for writing formatting features

* Regarding the main folder to contain the code that handles each screen or each important feature, it may not be in a screen or view folder, according to the previously pre-formatted structure.

* create file index.d.ts -> define interface props using

* Then in the main file will call the necessary props so that when outside passing in will catch the props. In here when will handle different phase codes and different components, such as:

    * Import what is needed to make its use necessary.
    * Where props are needed, I will pass them in so that when I call out, I can call those props and display them on the screen.
    * To display a screen with many components and related features, it must be handled in the return of a View, Scrollview, Text ... of react native so that they are displayed on one screen.
    * When calling the API, when I pass props in, then it will automatically force the props to call the functions and related props.








## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!


## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:


```
cd existing_repo
git remote add origin https://github.com/NguyenManhCuong290797/react-native-booking-btaskee
git branch -M main
git push -uf origin main
```

### Release

Releases are currently made from the [`1.x`](https://github.com/NguyenManhCuong290797/react-native-booking-btaskee.git) branch.

## Release Process

To make a new release, follow these steps:

* Verify the development branch has all the changes desired in a release and works well
* Make and merge a final PR into development branch that increments the version number in `package.json`
* Make and merge a PR from the development branch to the release branch
* Using the GitHub web UI, draft a new release using tag name `vx.x.x` (replace the `x` values as appropriate of course), with the release branch as the target, with release name `vx.x.x` (again, with appropriate numbers in place of `x` of course)
* Verify in the GitHub Actions panel for the repository that NPM publish succeeded

