import { Page } from '../template/Page';
import { Benefits } from './benefits';
import { Footer } from './footer';
import { Header } from './header';
import { Highlight } from './highlight';
import { Review } from './review';

export function Landing() {
    return (
        <Page>
            <Header />
            <Highlight />
            <Benefits />
            <Review />
            <Footer />
        </Page>
    );
}
