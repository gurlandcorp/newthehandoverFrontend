const API_LINK = process.env.API_URL;
const Base_URL = process.env.NODE_ENV=='development' ? 'http://127.0.0.1:3000' : 'https://thehandover.com';
const Stripe_Keys = {
    'production': {
        Secret_Key : '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',
        Publishable_Key : 'pk_live_51H8M3IJEYFz5N2An5wlzjouzbhlUJzYgKCNkeiWPmEVBppVlPTwdTtuR2SyfUiRRSQ8zz4ee8A13nH3fhkql3o7W00z3xiFH53'
    },
    'development': {
        Secret_Key : 'sk_test_51H8M3IJEYFz5N2AnlpeZnX5ZE6x7EzTVtlUFCL2tewgZlnqhOyy9dkMpPE0gzGOAeeKvqw9JY4Q7sjfBDVLj6xI200UvQylhHE',
        Publishable_Key : 'pk_test_51KjTaTFEjzwc2wXkEvCq0uzO8TVbwphXQ6hzISpeWWG1K5JkJnGRAv7Y3OR3SjQBl7h3dOm7GTmH4TtctzazhMuY00wYWLA3az'
    },
    'test': {
        Secret_Key : 'sk_test_51H8M3IJEYFz5N2AnlpeZnX5ZE6x7EzTVtlUFCL2tewgZlnqhOyy9dkMpPE0gzGOAeeKvqw9JY4Q7sjfBDVLj6xI200UvQylhHE',
        Publishable_Key : 'pk_test_51KjTaTFEjzwc2wXkEvCq0uzO8TVbwphXQ6hzISpeWWG1K5JkJnGRAv7Y3OR3SjQBl7h3dOm7GTmH4TtctzazhMuY00wYWLA3az'
    },
}
export { API_LINK, Base_URL, Stripe_Keys }