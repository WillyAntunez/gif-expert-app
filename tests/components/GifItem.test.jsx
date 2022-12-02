import React from 'react';
import { GifItem } from '../../src/components/GifItem';
import { render, screen } from '@testing-library/react';

describe('Pruebas en el componente GifItem', () => {
    const exampleId = '12345';
    const exampleUrl = 'http://ejemplo.com/api/v2/1234';
    const exampleTitle = 'title';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(
            <GifItem id={exampleId} url={exampleUrl} />
        );

        expect({ container }).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(
            <GifItem id={exampleId} url={exampleUrl} title={exampleTitle} />
        );

        /* const src = screen.getByRole('img').src;
        const alt = screen.getByRole('img').alt; */

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(exampleUrl);
        expect(alt).toBe(exampleTitle);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(
            <GifItem id={exampleId} url={exampleUrl} title={exampleTitle} />
        );
        expect(screen.getByText(exampleTitle)).toBeTruthy();
    });
});
