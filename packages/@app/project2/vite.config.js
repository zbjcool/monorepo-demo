/*
 * @Date: 2023-07-04 09:27:56
 * @LastEditors: bingo 157272494@qq.com
 * @LastEditTime: 2023-07-21 15:38:06
 * @FilePath: /goocan-lowcode/packages/formula-editor/vite.config.ts
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions()
  ],
  resolve: {
    alias:  [
      {
        find: '@project1',
        replacement: resolve(__dirname, './src'),
      },
    ],
  }
})
