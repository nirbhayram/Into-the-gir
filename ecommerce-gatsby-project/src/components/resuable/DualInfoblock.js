import React from 'react'
import Heading from "./Heading"

export default function DualInfoblock({ heading }) {
    return (
        <section className="my-2 mx-2 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="text-white text-left mb-5">
                            [master 8bd422e] Added about us section.
                            4 files changed, 48 insertions(+), 1 deletion(-)
                            create mode 100644 ecommerce-gatsby-project/src/components/resuable/Heading.js
                            create mode 100644 ecommerce-gatsby-project/src/components/resuable/Infoblock.js
                            Nirbhays-MacBook-Pro:Into-the-gir nirbhay$ git push
                            Enumerating objects: 46, done.
                            Counting objects: 100% (46/46), done.
                            Delta compression using up to 8 threads
                            Compressing objects: 100% (34/34), done.
                            Writing objects: 100% (34/34), 5.08 KiB | 2.54 MiB/s, done.
                            Total 34 (delta 19), reused 3 (delta 0)
                            remote: Resolving deltas: 100% (19/19), completed with 7 local objects.
                            To https://github.com/nirbhayram/Into-the-gir.git
                            7d1b4fe..8bd422e  master -master
                            Nirbhays-MacBook-Pro:Into-the-gir nirbhay$
                            [master 8bd422e] Added about us section.
                            4 files changed, 48 insertions(+), 1 deletion(-)
                            create mode 100644 ecommerce-gatsby-project/src/components/resuable/Heading.js
                            create mode 100644 ecommerce-gatsby-project/src/components/resuable/Infoblock.js
                            Nirbhays-MacBook-Pro:Into-the-gir nirbhay$ git push
                            Enumerating objects: 46, done.
                            Counting objects: 100% (46/46), done.
                            Delta compression using up to 8 threads
                            Compressing objects: 100% (34/34), done.
                            Writing objects: 100% (34/34), 5.08 KiB | 2.54 MiB/s, done.
                            Total 34 (delta 19), reused 3 (delta 0)
                            remote: Resolving deltas: 100% (19/19), completed with 7 local objects.
                            To https://github.com/nirbhayram/Into-the-gir.git
                            7d1b4fe..8bd422e  master -master
                            Nirbhays-MacBook-Pro:Into-the-gir nirbhay$
                            
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/3961066/pexels-photo-3961066.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-warning btn-block btn-lg">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
