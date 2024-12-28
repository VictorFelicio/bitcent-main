import { IconBrandGoogle } from '@tabler/icons-react';
import { MenuItem } from './MenuItem';

export function Menu() {
    return (
        <div className="flex gap-2">
            <MenuItem
                url="#home"
                className="hidden sm:flex"
            >
                Início
            </MenuItem>
            <MenuItem
                url="#benefits"
                className="hidden sm:flex"
            >
                Vantagens
            </MenuItem>
            <MenuItem
                url="#reviews"
                className="hidden sm:flex"
            >
                Depoimentos
            </MenuItem>
            <MenuItem className="bg-gradient-to-r from-indigo-600 to-cyan-600">
                <div className="flex items-center gap-2">
                    <IconBrandGoogle size={15} />
                    <span>Login</span>
                </div>
            </MenuItem>
        </div>
    );
}
