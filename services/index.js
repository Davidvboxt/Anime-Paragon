import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_API;

export const getPosts = async () => {
    const query = gql`
        query Assets {
        animes {
            bio
            id
            name
            rating
            subtitles
            image {
            url
            }
        }
    }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection;
}