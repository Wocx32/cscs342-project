import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Post() {

    const [post, setPost] = useState({})
    const [user, setUser] = useState({})
    const { postId } = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(json => {
                setPost(json)
                fetch(`https://jsonplaceholder.typicode.com/users/${json.userId}`)
                    .then(response => response.json())
                    .then(json => setUser(json))
                    .catch(() => {})
            })
            .catch(() => {})
    }, [])

    return (
        <>
            <Header />
            <main className='container content'>
                <section className='hero'>
                    <div>
                        <h1>{post.title}</h1>
                        <p>Author: <a href={`/user/${user.id}`}>{user.username}</a></p>
                    </div>
                </section>
                <section className='post-content'>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod minus molestias deleniti id repudiandae asperiores voluptates unde repellat deserunt eaque sequi optio, fugit molestiae aliquam tempora quis excepturi omnis.
                        Pariatur labore assumenda iure incidunt ipsum nobis? Ea animi voluptatum tempora aliquam! Quia odio itaque maxime fuga illo laboriosam corrupti, nihil totam omnis quo voluptates inventore reprehenderit? Consequatur, nulla laborum?
                        Ea dolorum unde corporis sit fugit doloribus veritatis, nulla deserunt iure esse non incidunt tenetur architecto dicta nihil neque eveniet ex dolore quod quidem consectetur placeat expedita reiciendis? Cupiditate, numquam?
                        Exercitationem ex atque recusandae et hic consequuntur ratione iste, iusto sunt nemo, temporibus, fuga quia laudantium veniam reiciendis mollitia. Voluptatibus ducimus minima non iste quis culpa modi aliquam qui excepturi?
                        Magni magnam qui enim, rem dolore saepe id, a reprehenderit dicta sit at. Ipsa ex in labore, cupiditate eligendi ea repellendus quia, voluptatibus corporis repellat cum. Necessitatibus, sed. Laboriosam, ipsam.
                        Debitis ipsum modi temporibus saepe itaque qui cum eaque officia repellendus obcaecati exercitationem magni hic, reiciendis dicta dolore error maiores voluptas optio libero quas dolorum! Repellendus iusto deserunt distinctio est?
                        Tempore vero aut facilis voluptatum illum numquam consequatur hic sint repudiandae atque aperiam doloribus amet velit ea dolorem nisi deleniti nam laboriosam enim perferendis voluptatibus, unde laborum. Sunt, laboriosam repellendus.
                        <br />
                        Quae, odit debitis. Commodi consectetur eligendi blanditiis numquam impedit dolore eius dicta sapiente, consequatur nesciunt quae earum mollitia nisi labore culpa odit pariatur facere magni nihil facilis incidunt natus harum.
                        Facere, vitae aliquam maxime sint quos, ipsam ducimus commodi ullam quis dolorem iste voluptatum qui, unde esse accusamus voluptas temporibus odio necessitatibus inventore alias atque rem natus. Sunt, assumenda voluptatum?
                        Praesentium obcaecati saepe consequatur voluptatem quidem est non ab eius? Corporis mollitia ex eos quos repellat delectus, doloremque eaque dolores omnis illum tenetur et facere quo officia nostrum hic sit.
                        Earum asperiores corrupti veniam laborum, voluptatem repellendus excepturi similique suscipit, ratione consequatur facilis consectetur! Voluptates provident numquam asperiores magni culpa minima excepturi aspernatur eligendi tempore. Sequi libero nobis atque minima.
                        Magni a nostrum eaque blanditiis. Eaque enim doloremque sunt sequi amet dicta! Vero sequi voluptatum, esse nam officia accusantium ut sint quam necessitatibus eius repellendus eveniet quis commodi reprehenderit ducimus?
                        Quibusdam inventore expedita facere adipisci ullam dolorum hic saepe! Debitis, illo? Rerum tenetur qui vel optio nam maiores, corporis esse repellat harum numquam? Non id nesciunt expedita tenetur vitae itaque?
                        Numquam nobis illum alias. Ratione, illo ullam cupiditate est quod minima quasi repellat. Deserunt eum, tempore rerum iste accusamus, iusto minima laborum consectetur labore adipisci vero aperiam minus maiores amet!
                        Suscipit saepe pariatur iste consequuntur? Molestiae cupiditate nesciunt rem amet exercitationem. Voluptate culpa neque ullam deleniti, exercitationem possimus eligendi quod sequi tenetur magnam sapiente deserunt veniam sunt minus nobis quos?
                        Eos ipsa iusto hic. Similique non mollitia excepturi itaque eos doloribus, voluptas possimus architecto nobis nesciunt totam earum dolores saepe, odit dolor natus. Nostrum deleniti ullam earum quod perferendis pariatur.
                        Facilis error odit ullam nisi debitis soluta molestiae, tenetur deserunt provident voluptas assumenda quae beatae saepe maiores cum dignissimos officiis odio perferendis reprehenderit accusantium praesentium sequi sint quaerat pariatur? Totam.
                        Qui voluptatum incidunt quia, laboriosam ex numquam consectetur porro placeat eaque culpa, sunt dolorum ipsam eveniet deserunt. Odio soluta obcaecati aperiam accusamus autem temporibus, dolores, doloremque, neque voluptatem illo modi.
                        <br />
                        Delectus ad accusamus ab ipsam, voluptas architecto facilis consequatur perferendis corporis, deserunt a enim vero odio id fugiat sequi odit. Necessitatibus pariatur odit atque vero laudantium. Exercitationem sed fugit beatae?
                        Magni accusantium, quidem, porro, soluta sequi quibusdam ullam corrupti ex debitis nemo molestiae nulla in itaque libero repudiandae quisquam dignissimos beatae doloremque impedit quod voluptate? Quis facilis fugiat delectus fugit.
                        Fuga laborum nisi modi doloribus velit nulla provident labore nihil ullam error, id sequi dolores illo deserunt dignissimos officia quas laboriosam blanditiis explicabo? Dolorem porro incidunt, vitae est aliquid eos!
                        Dicta qui veritatis distinctio. Corporis, magni. Natus nulla dignissimos aliquid repudiandae non alias. Officiis iure unde facilis ut ullam pariatur atque impedit quod laboriosam et nihil sit possimus, odit alias.
                        Debitis quasi voluptatum possimus eligendi magnam nemo, dolorum aut velit repudiandae necessitatibus facere, nostrum commodi! Delectus expedita quia consequatur architecto, molestias veniam consequuntur pariatur quae doloribus, rem, a commodi laboriosam!
                        Expedita delectus quos iure itaque commodi? Quia cumque quae facilis voluptatum veniam exercitationem soluta ad quisquam sapiente ipsam est vero sed officia sequi, reprehenderit illo. Nesciunt itaque tempore magni corrupti!
                        Id quasi tenetur odio ex obcaecati tempora aliquam natus facere autem magnam iste neque ad, beatae maxime non expedita? Aut praesentium beatae quas recusandae iste cupiditate nemo reprehenderit soluta molestias.
                        <br />
                        Dolorum fugiat eos itaque laboriosam quasi excepturi voluptatem vitae? Possimus error quia placeat atque corrupti cumque magni maxime tempore odio sit iusto labore incidunt voluptatibus doloribus aperiam magnam, doloremque inventore.
                        Laborum consequuntur facere temporibus inventore aliquid ducimus, natus ipsa, adipisci tenetur hic fuga reprehenderit! Officia, qui nihil eos nisi temporibus placeat necessitatibus dolore ea esse, reiciendis aspernatur, minima aperiam doloribus.
                        Ea est a delectus similique ipsa assumenda nihil ratione. Doloribus tempora modi laborum excepturi sunt magnam, quis commodi ratione repellat ipsa vero quae, numquam ducimus dolor laboriosam perspiciatis sequi temporibus!
                        Minima quia amet quam magnam repellat vel dolore nostrum, soluta incidunt error dignissimos itaque at, corporis cum laboriosam ratione! Sequi quisquam obcaecati deserunt placeat quo deleniti a corrupti amet aut!
                        Natus voluptatibus fuga architecto nostrum adipisci, quaerat eius voluptatem vero a maiores dignissimos? Provident culpa dolorem modi veniam animi, error mollitia, tempore numquam ullam a voluptatem, sequi laudantium facilis necessitatibus?
                        Ratione molestias accusantium ab excepturi. Incidunt, nisi magni voluptatum ipsa laudantium quae repellendus assumenda molestias quis cumque a laboriosam esse iusto libero rerum quo excepturi accusamus quidem itaque suscipit autem?
                        Rerum possimus accusantium harum repudiandae vel necessitatibus exercitationem laudantium, modi similique eum id quaerat nulla autem commodi illo consequuntur minus impedit tempora nemo debitis quibusdam explicabo suscipit alias. Quos, recusandae.
                        Veniam unde ut a officia dicta sequi numquam laborum minima molestias aperiam pariatur quaerat architecto error obcaecati omnis nostrum provident ex, minus necessitatibus labore voluptatem blanditiis sunt nulla! Ut, sapiente!
                        <br />
                        Dolores dignissimos ex expedita aliquam esse. Quis, laboriosam. Itaque sit repudiandae maxime ullam doloremque, perferendis ipsum quae pariatur minima officiis molestias laborum, odio veniam consequatur earum! Modi sapiente debitis eos!
                        Delectus ab distinctio nam quae consequatur fugit eligendi vero beatae cum. Officiis dignissimos deserunt earum tempore ducimus voluptatum in quia? Adipisci officia ea nihil distinctio provident facilis iusto autem iste.
                        Expedita veritatis suscipit ab corporis rerum culpa ut totam esse dicta. Voluptate, ullam magni? Cum hic ipsa culpa blanditiis neque alias obcaecati nulla fuga a, totam illo, veritatis voluptate quam.
                        Eligendi sint nobis doloremque ea harum voluptas illum doloribus sit in consectetur, velit rerum deleniti aliquam at quibusdam molestiae. Laudantium quasi excepturi sequi iusto voluptate voluptatibus odit molestias ad voluptatum?
                        Amet praesentium, adipisci doloremque iusto doloribus dolorum tenetur itaque repudiandae molestiae voluptate provident debitis perferendis accusantium, ipsa esse magni. Odio odit delectus, dolor possimus at quos accusantium vero ipsam dicta.
                        Maxime hic quasi, inventore dicta odit laborum sed adipisci nulla? Iusto eaque iure soluta ut dolorum magni eum, similique dolores id porro perspiciatis quasi perferendis. Architecto sapiente ab qui. Enim.
                        <br />
                        Quo ipsam neque tempore, ab sequi accusamus nisi molestias aut quia reiciendis tempora sapiente. Quos, qui quaerat? Assumenda facere at voluptatem maxime, deserunt a quidem pariatur error alias, qui aut.
                        Ullam, deleniti ad laboriosam voluptatum ipsum nostrum veritatis explicabo quas consequatur quia eaque quo unde harum enim pariatur similique, animi, reiciendis perferendis id est obcaecati assumenda eligendi architecto non. Voluptate?
                        Possimus asperiores vitae totam, quae debitis, cumque reprehenderit sit quos, blanditiis culpa illo maiores aliquam excepturi sint repudiandae neque commodi eligendi et! Ipsum similique, qui accusantium expedita aliquam obcaecati recusandae!
                        Laboriosam ullam debitis recusandae eveniet aspernatur. Molestiae illo eligendi aut expedita quibusdam eius voluptate reprehenderit cumque ullam fuga optio doloribus nostrum blanditiis earum in natus, sed repudiandae odit voluptas. Aperiam!
                        Totam magnam quae aliquid impedit minima nam accusamus earum numquam aspernatur? Consectetur, consequuntur explicabo nam quibusdam labore alias perferendis dicta! Consequuntur quidem, eum beatae error vitae neque ratione provident sequi.
                        Laboriosam, sequi quia laudantium magnam corporis rem fuga impedit enim doloribus officiis ex error culpa ipsum animi molestiae accusamus hic labore inventore amet dolor id eos neque. Blanditiis, totam. Deserunt!
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Post
