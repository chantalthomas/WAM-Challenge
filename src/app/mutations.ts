import gql from 'graphql-tag';

export const createPost = gql `
    mutation createPost($data: PostInput!){
        createPost(data: $data){
            id
        }
    }`;

export const updatePost = gql `
    mutation updatePost($id: String!, $content: String!){
        updatePost(id: $id, content: $content){
            id
        }
    }`;

export const deletePost = gql `
    mutation deletePost($id: String!){
        deletePost(id: $id){
            void
        }
    }`;

export const createStudySet = gql `
    mutation createStudySet($studySetInput: StudySetInput!){
        createStudySet(studySetInput: $StudySetInput){
            id
            title
            description
        }
    }`;
