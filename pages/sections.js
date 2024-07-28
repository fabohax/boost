import Link from 'next/link';

const Sections = () => {
    return (
        <div className="sections">
            <div className="section-button">
                <Link href="/accesorios" className="rounded-button" passHref>
                    Accesorios
                </Link>
            </div>
            <div className="section-button">
                <Link href="/celulares" className="rounded-button" passHref>
                    Celulares
                </Link>
            </div>
            <div className="section-button">
                <Link href="/laptops" className="rounded-button" passHref>
                    Laptops
                </Link>
            </div>
            <div className="section-button">
                <Link href="/tablets" className="rounded-button" passHref>
                    Tablets
                </Link>
            </div>
            <div className="section-button">
                <Link href="/tablets" className="rounded-button" passHref>
                    Wearables
                </Link>
            </div>
        </div>
    )
}

export default Sections;