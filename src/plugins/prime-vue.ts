import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Image from 'primevue/image';
import Slider from 'primevue/slider';
import AutoComplete from 'primevue/autocomplete';

const components = [
    Button,
    InputText,
    Avatar,
    Card,
    Menu,
    Image,
    Slider,
    AutoComplete
];

export const usePrimeVueComponentents = (app: any) => {
    components.forEach(component => {
        app.component(component.name, component);
    });
};