import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'

class Pagination extends Component{
    _handlePageClick = (data) => {
        const {selected} = data

        typeof this.props.onChange === 'function' && this.props.onChange(selected + 1)
    }

    render() {
        const {pages, page} = this.props

        if (pages <= 1) return null

        return (
            <div className="Pagination">
                <ReactPaginate
                    
                    pageCount={pages}
                    forcePage={page - 1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this._handlePageClick}
                    containerClassName="pagination"
                    pageClassName='page-item'
                    previousClassName='Previous page-item'
                    nextClassName='Next page-item'
                    pageLinkClassName='page-link'
                    previousLinkClassName='page-link'
                    nextLinkClassName='page-link'
                    subContainerClassName="pages pagination"
                    breakClassName='Break page-item'
                    breakLabel={<span>...</span>}
                    activeClassName='active'/>
            </div>
        )
    }
}

Pagination.defaultProps = {
    limit: 10
}

Pagination.propTypes = {
    onChange: PropTypes.func,
    pages: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    limit: PropTypes.number
}

export default Pagination