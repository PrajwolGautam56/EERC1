const links = [
  { name: 'Learn More', href: '#' },
  { name: 'Our Projects', href: '#' },
  { name: 'Our Team', href: '#' }, 
]
const stats = [
  { name: 'Employees', value: '21+' },
  { name: 'Projects Completed', value: '300+' },
  { name: 'Clients', value: '40+' },
]

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-[#F8F8F8] py-24 sm:py-32">
      <img
        src="../../public/images/ab.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#169b1a] to-[#21fc63] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#8cc76a] to-[#0b9562] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="title py-2 font-extrabold text-6xl  tracking-wide text-black   bold">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-900 bold ">
          <span className='text-[#5DB85E] text-2xl'>The Environment and Engineering Research Center Pvt. Ltd (EERC)</span> is a consulting and research institute registered in 6th May 2016 in the Office of Company Registrar at Tripureshwor, Kathmandu. The Environment and Engineering Research Center Pvt. Ltd has an interdisciplinary team dedicated to understand the problems of development field relating to environment nexus and their potential solutions.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-900">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
