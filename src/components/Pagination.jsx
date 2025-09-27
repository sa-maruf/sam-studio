import React, { useState, useEffect } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const [pagesToShow, setPagesToShow] = useState([]);

    useEffect(() => {
        const pages = [];
        const maxPages = 3;
        const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
        const endPage = Math.min(totalPages, startPage + maxPages - 1);

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) pages.push('...');
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) pages.push('...');
            pages.push(totalPages);
        }

        setPagesToShow(pages);
    }, [currentPage, totalPages]);

    return (
        <div className="pagination flex justify-center items-center gap-2">
            {pagesToShow.map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <span className="pagination-ellipsis text-white ">...</span>
                    ) : (
                        <button
                            className={`pagination-button text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md transition-colors duration-300 ${page === currentPage ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                            onClick={() => onPageChange(page)}
                            disabled={page === currentPage}
                        >
                            {page}
                        </button>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Pagination;