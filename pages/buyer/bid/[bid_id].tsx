import React from 'react'

const Bid = () => {
  return (
    <div>BidID</div>
  )
}

export default Bid

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}