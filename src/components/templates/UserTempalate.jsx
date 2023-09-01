import PropTypes from 'prop-types';
import { Footer, Header } from '../fragments';

const UserTemplate = ({children}) => {
  return (
    <div className="">
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

UserTemplate.propTypes = {children: PropTypes.node.isRequired,};

export default UserTemplate