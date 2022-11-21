import { gsap } from 'gsap'
import { Power2 } from 'gsap'

export default defineNuxtPlugin(() => {
  return { provide: { gsap, Power2 } }
})
