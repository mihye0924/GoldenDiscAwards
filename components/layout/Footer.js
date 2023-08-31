import footer from '@/styles/scss/layout/footer.module.scss'
import FNav from '@/components/layout/FNav'

export default function Footer() {
    return(
        <div className="l-footer">
            <div className={footer.footer_wrap}>
                <a href="#">
                    GOLDENDISCAWARDS
                </a>
                <FNav />
            </div>
        </div>
    )
}