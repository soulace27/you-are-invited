import Image from "next/image"
import localFont from "next/font/local"

const ClimateCrisis = localFont({
  src: "../../public/fonts/Climate_Crisis/ClimateCrisis-Regular-VariableFont_YEAR.ttf",
})

const Honk = localFont({
  src: "../../public/fonts/Honk/Honk-Regular-VariableFont_MORF,SHLN.ttf",
})

const Micro5 = localFont({
  src: "../../public/fonts/Micro_5/Micro5-Regular.ttf",
})

const Nabla = localFont({
  src: "../../public/fonts/Nabla/Nabla-Regular-VariableFont_EDPT,EHLT.ttf",
})

export default function Home() {
  return (
    <div className=''>
      <main>
        <h1 className={ClimateCrisis.className}>Hello World</h1>
      </main>
    </div>
  )
}
