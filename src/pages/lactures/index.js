import RootNavbar from "../layout/navbar/RootNavbar";
import RootFooter from "../layout/footer/RootFooter"


export default function index({ data }) {
    console.log(data)
    return (
        <div className="container mx-auto">
            {
                data.map(item => <div key={item._id} class="mt-8 lg:-mx-6 lg:flex lg:items-center  ">
                    <imImg class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={process.env.URL + "/api/media" + item.class_thumbnail} alt="" />

                    <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <p class="text-sm text-blue-500 uppercase">category</p>

                        <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                            All the features you want to know
                        </a>

                        <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                            laudantium quia tempore delect
                        </p>

                        <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                        <div class="flex items-center mt-6">
                            <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                            <div class="mx-4">
                                <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(process.env.URL + '/api/classes')
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}


index.getLayout = function (pages) {
    return <>
        <RootNavbar />
        {pages}
        <RootFooter />
    </>
}
