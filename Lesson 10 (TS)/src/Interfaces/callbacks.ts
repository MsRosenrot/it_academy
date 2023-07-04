interface mapperInterface<El>{
    (...args): El
}

interface filterFnInterface{
    (...args):boolean
}
export { mapperInterface, filterFnInterface }