export default function Home() {
	return (
		<main className="p-6">
			<h1 className="text-2xl mb-4">Next.js with Vercel Postgres</h1>

			<form className="bg-slate-400 p-6 rounded-lg">
				<div className="mb-3">
					<label className="block mb-1" htmlFor="note">
						Note:
					</label>
					<textarea className="w-full" id="note" />
				</div>

				<div className="mb-3">
					<label className="block mb-1" htmlFor="rank">
						Rank:
					</label>
					<input className="w-[3rem] text-right" type="text" id="rank" />
					<div className="text-xs mt-1 text-slate-700">0 = not important, 5 very important, e.g 4.3</div>
				</div>
				
				<div className="mb-3">
					<label className="block mb-1" htmlFor="apppin">
						PIN
					</label>
					<input className="w-[8rem]" type="password" id="rank" />
					<div className="text-xs mt-1 text-slate-700">enter access pin</div>
				</div>
				
				<div className="mt-6 flex justify-end">
					<button className="bg-slate-700 px-2 py-1 rounded text-slate-400">Save</button>
				</div>


			</form>
		</main>
	);
}
