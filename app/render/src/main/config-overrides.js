//const { override, fixBabelImports } = require('customize-cra');
// module.exports = override(
//     fixBabelImports('import', {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: 'css'
//     })
// );

const {override} = require('customize-cra');
function addRendererTarget(config){
    config.target='electron-renderer'
    return config
}
module.exports=override(addRendererTarget);