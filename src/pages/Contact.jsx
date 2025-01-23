
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Contact() {

    return (
        <>
            <Header />
            <main className='container content'>
                <section className='hero'>
                    <div>
                        <h1>Contact</h1>
                        <p>Get in touch</p>
                    </div>
                </section>
                <section>
                    <form action="#">
                        <fieldset>
                            <label>
                                Name
                                <input
                                    name="name"
                                    placeholder="Name"
                                    autoComplete="given-name"
                                    required
                                 />
                            </label>
                            <label>
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    required
                                 />
                            </label>
                            <label>
                                Message
                                <textarea 
                                    name="message"
                                    placeholder="Got a question?"
                                    required
                                >
                                    
                                </textarea>
                            </label>
                        </fieldset>

                        <input 
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </section>
            </main>

            <Footer />
        </>
    )

}