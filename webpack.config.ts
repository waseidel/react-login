import path from 'path'
import { Configuration } from 'webpack'

function srcPath(subdir: string) {
  return path.join(__dirname, 'src', subdir)
}

const config: Configuration = {
  resolve: {
    alias: {
      components: srcPath('components'),
      views: srcPath('views')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}

export default config
