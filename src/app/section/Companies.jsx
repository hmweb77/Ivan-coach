const timeline = [
	{
	  name: 'START WORKING ON ELECTRONICS',
	  description:
		'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
	  date: '1997 ',
	  dateTime: '1997 ',
	},
	
	{
	  name: 'MOVE TO LISBON',
	  description:
		'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
	  date: '2008',
	  dateTime: '2008',
	},
	{
	  name: 'HELD PMP CREDENTIALS',
	  description:
		'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
	  date: '2011',
	  dateTime: '2011',
	},
	{
	  name: 'START WORKING AT NOS',
	  description:
		'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
	  date: '2013',
	  dateTime: '2013',
	},
  ]
  
  export default function Stats() {
	return (
	  <div className="bg-white py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
		  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
			{timeline.map((item) => (
			  <div key={item.name}>
				<time
				  dateTime={item.dateTime}
				  className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
				>
				  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 h-1 w-1 flex-none">
					<circle r={2} cx={2} cy={2} fill="currentColor" />
				  </svg>
				  {item.date}
				  <div
					aria-hidden="true"
					className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
				  />
				</time>
				<p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
				<p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
			  </div>
			))}
		  </div>
		</div>
	  </div>
	)
  }
  
