import type {NextPage} from 'next';
import Head from 'next/head';

interface LayoutProps {
    children: React.ReactNode;
 }
 

const Layout: NextPage<LayoutProps> = (props) => {
    return(
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
        </Head>
        {props.children}
        </>

    )
}
export default Layout;