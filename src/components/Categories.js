import styled from 'styled-components'
import { categories } from '../data';
import CategoryItem from './CategoryItem';

// functions
import { responsive500 } from "../Functions";


const Container = styled.div`
    display: flex;
    margin-top: 20px;
    ${responsive500({ flexDirection: "column" })}
`;

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => <CategoryItem key={item.id} item={item} />)}
        </Container>
    );
};

export default Categories;