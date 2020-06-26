import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({ heading }) {
    return (
        <section className="bg-theme py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="text-center col-10 col-sm-8 mx-auto">
                    <p className="lead text-white mb-4">
                        [master f30d5ff] Hersection componenet created.
                        7 files changed, 101 insertions(+), 10 deletions(-)
                        create mode 100644 ecommerce-gatsby-project/src/components/resuable/HeroSection.js
                        Nirbhays-MacBook-Pro:Into-the-gir nirbhay$ git add .
                        Nirbhays-MacBook-Pro:Into-the-gir nirbhay$ git commit -m "Completed hero section"
                        Auto packing the repository in background for optimum performance.
                        See "git help gc" for manual housekeeping.
                        warning: The last gc run reported the following. Please correct the root cause
                        and remove .git/gc.log.
                        Automatic cleanup will not be performed until the file is removed.
                        warning: There are too many unreachable loose objects; run 'git prune' to remove them.
                        [master f25e1cd] Completed hero section
                        3 files changed, 22 insertions(+), 5 deletions(-)
                        Nirbhays-MacBook-Pro:Into-the-gir nirbhay$
                    </p>
                    <Link to="/">
                        <button className="btn btn-warning btn-lg">{heading}</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
