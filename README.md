# sat_electron

**Clone e execute para ver a comunicação da SAT.DLL usando Electron.**

Esta é apenas uma pequena aplicação para exemplificar o uso do Electron com comunicações dll, mais especificamente usando a DLL do SAT.

**Este código foi usado a base de exemplo em [Electron API Demos](https://electronjs.org/#get-started) caso necessário pode acessar este link para mais exemplos do Electron.**

Para executar precisa dos sequintes arquivos:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

## Para Usar

Para clonar e executar este repositório você vai precisar [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com o [npm](http://npmjs.com)) instalado em seu computador. e o Emulador [SAT_Demo](https://portal.fazenda.sp.gov.br/servicos/sat/Paginas/Downloads.aspx) usei o Emulador SAT off-line v2.9.4 - 10/02/2017

**Observações**
- `nodejs` - Precisa ser a versão 10, e 32Bits, as dlls do SAT são 32Bits, não testei usando 64Bits.
- `SAT` - Para usar o Ativador SAT do emulador tem que ter instalado o JavaRE 32Bits e não pode ter instalado o 64Bits.
- `DLLS` - Para comunicação com a dll precisa instalar algumas dependencias do npm que vão estar citadas a baixo.

 Abrir o GitBash, ou o powerShell do windows 10 como admin e executar os comandos:

```bash
# Clone this repository
git clone https://github.com/maaelphd/sat_electron.git
# Go into the repository
cd sat_electron
# Install dependencies
npm install
# Install dependencies para comunicação com a dll usando C++ para mais infomrações https://github.com/felixrieseberg/windows-build-tools
npm install --global --production windows-build-tools
# Install dependencies para compilar addons nativas do node.js para mais informações https://github.com/nodejs/node-gyp
npm install -g node-gyp
# Install dependencies addon que vai comunicar com a library veja mais em https://www.npmjs.com/package/ffi-napi
npm install ffi-napi
# Run the app para rodar o app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

**Usar Electron com Visual Code**
https://www.youtube.com/watch?v=tY8dIdToJjQ

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
