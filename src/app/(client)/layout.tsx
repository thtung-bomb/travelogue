import Header from '@/components/header'
import React from 'react'
function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex min-h-screen flex-col">
			<section className="flex h-full flex-1 flex-col">
				<Header />
				<div className="flex-1">{children}</div>
				{/* Footer */}
			</section>
		</main>
	)
}

export default Layout