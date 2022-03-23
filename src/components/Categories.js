import styled from 'styled-components'
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    margin-top: 20px;
`

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => <CategoryItem key={item.id} item={item} />)}
        </Container>
    );
};

export default Categories;