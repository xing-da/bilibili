
import path from 'path'
import ts from "rollup-plugin-typescript2"
export default {
    input: './src/index.ts',

    output:{
        file:path.resolve(__dirname,'./lib/index.js'),
        format:'umd',
    },
    plugins:[
        ts()
    ]
}