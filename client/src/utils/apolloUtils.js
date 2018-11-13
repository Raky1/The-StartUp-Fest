import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

//set config apollo
export const client = new ApolloClient({
    uri: 'https://startups-project-mytvsxrgeb.now.sh/'
});

// graphql query
export const getAllStartups = gql`
    query GetAllStartups {
        allStartups {
            name
            description
            imageUrl
            Segment {
                name
            }
        }
    }
`;