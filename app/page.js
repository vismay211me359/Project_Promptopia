import Feed from "@/components/Feed"

export default function Home(){
    return(
        <section className="w-full flex items-center justify-center flex-col">
            <h1 className="head_text text-center">
                Discover and Share
                <br className="max-md:hidden"/>
                <span className="orange_gradient text-center">AI-Powered Prompts</span>
            </h1>
            <p className="text-base desc text-center font-normal text-gray-700 lg:text-lg hover:text-red-500">
            Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
            </p>
            <Feed/>
        </section>
    )
}
