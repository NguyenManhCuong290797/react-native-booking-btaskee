# React-Native-Booking-Btaskee

### Release

Releases are currently made from the [`5.x`](https://github.com/NguyenManhCuong290797/react-native-booking-btaskee.git) branch.

## Release Process

To make a new release, follow these steps:

* Verify the development branch has all the changes desired in a release and works well
* Make and merge a final PR into development branch that increments the version number in `package.json`
* Make and merge a PR from the development branch to the release branch
* Using the GitHub web UI, draft a new release using tag name `vx.x.x` (replace the `x` values as appropriate of course), with the release branch as the target, with release name `vx.x.x` (again, with appropriate numbers in place of `x` of course)
* Verify in the GitHub Actions panel for the repository that NPM publish succeeded
