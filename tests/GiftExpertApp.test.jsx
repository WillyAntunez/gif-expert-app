const {
    render,
    screen,
    fireEvent,
    waitFor,
} = require('@testing-library/react');

const { GiftExpertApp } = require('../src/GiftExpertApp');

const newValue = 'Goku';

describe('Pruebas en <GifExpertApp/>', () => {
    test('Debe de mostrar una lista de gifs por defecto', async () => {
        render(<GiftExpertApp />);

        const cardGrid = screen.getByLabelText('card-grid');

        await waitFor(() =>
            expect(cardGrid.childElementCount).toBeGreaterThan(0)
        );

        expect(cardGrid.childElementCount).toBeGreaterThan(0);
    });

    test('Debe poder mostrar nuevos gifs', () => {
        render(<GiftExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: newValue } });
        fireEvent.submit(form);

        expect(screen.getByText(newValue)).toBeTruthy();
    });

    test('No debe aceptar valores repetidos', () => {
        render(<GiftExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: newValue } });
        fireEvent.submit(form);

        fireEvent.change(input, { target: { value: newValue } });
        fireEvent.submit(form);

        expect(screen.getAllByText(newValue).length).toBe(1);
    });
});
