import { useContext } from 'react'
import { DirectionContext } from './direction-provider'

export type { Direction } from './direction-provider'

export function useDirection() {
  const context = useContext(DirectionContext)
  if (!context) {
    throw new Error('useDirection must be used within a DirectionProvider')
  }
  return context
}
