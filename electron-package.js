const packager = require('electron-packager');

const runPackage = async () => {
  const buildPath = 'release-builds'
  const platform = 'win32'
  const options = {
    path: 'release-builds',
    platform: 'win32',
    arch: 'x64',
    prune: 'true',
    out: 'release-builds',
    name: 'Electron Win Test App',
    afterCopy: [
      (buildPath, electronVersion, platform, arch, callback) => {
        rebuild({ buildPath, electronVersion, arch })
          .then(() => callback())
          .catch((error) => callback(error));
      },
    ],
  };

  await packager();
  console.log('Packaging complete');
};
// runPackage();
