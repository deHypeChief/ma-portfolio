import '../lib/styles/loading.css'
import Logo from "@/components/logo/logo";

export default function Loading(){
    return(
        <>
            <section className="loading">
                <div className="loadingWrap">
                    <Logo/>
                </div>
            </section>
        </>
    )
}