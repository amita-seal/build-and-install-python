// Action to build any Python version on the latest labels and install it into the local tool cache.
// Copyright (C) 2022 Matteo Dell'Acqua
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

const toolName = 'Python';

const testedLabels = ['ubuntu-22.04', 'windows-2022', 'macos-12'];

export {testedLabels, toolName};

export enum InputNames {
  PYTHON_VERSION = 'python-version',
  PYTHON_VERSION_FILE = 'python-version-file',
  ARCHITECTURE = 'architecture',
  CACHE_BUILD = 'cache-build',
  ALLOW_BUILD = 'allow-build',
  TOKEN = 'token',
  CHECK_LATEST = 'check-latest',
  PRERELEASES = 'allow-prereleases'
}

export enum OutputNames {
  PYTHON_VERSION = 'python-version',
  ARCHITECTURE = 'architecture'
}

export enum ManifestUrl {
  OWNER = 'actions',
  REPO = 'python-versions',
  BRANCH = 'main'
}

const windowsBuildDependencies: string[] = [];

const vsInstallerUrl = 'https://aka.ms/vs/17/release/vs_enterprise.exe';

export {windowsBuildDependencies, vsInstallerUrl};

const ubuntuDependencies = [
  'make',
  'build-essential',
  'libssl-dev',
  'zlib1g-dev',
  'libbz2-dev',
  'libsqlite3-dev',
  'libncursesw5-dev',
  'libreadline-dev',
  'libgdbm-dev',
  'libgdbm-compat-dev',
  'libssl-dev',
  'curl',
  'llvm',
  'libncurses5-dev',
  'xz-utils',
  'tk-dev',
  'liblzma-dev',
  'gdb',
  'lcov',
  'pkg-config',
  'libffi-dev',
  'libreadline6-dev',
  'lzma',
  'lzma-dev',
  'uuid-dev'
];

const darwinDependencies = ['zlib', 'sqlite3', 'readline'];

export {darwinDependencies, ubuntuDependencies};

export type sslUrl = {
  name: string;
  url: string;
};

const ssl102Url: sslUrl = {
  name: 'openssl@1.0',
  url: 'https://raw.githubusercontent.com/rbenv/homebrew-tap/e472b7861b49cc082d1db0f66f265368da107589/Formula/openssl%401.0.rb'
};

export {ssl102Url};

const ftpPythonUrl = 'https://www.python.org/ftp/python';

export {ftpPythonUrl};
