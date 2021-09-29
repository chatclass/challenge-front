import 'styled-components'
import { Breakpoints } from '../styles/theme/breakpoints'
import { Colors } from '../styles/theme/colors'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    breakpoints: Breakpoints
  }
}
