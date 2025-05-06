#!/bin/bash
echo "Instalando backend..."
cd backend && npm install && cd ..

echo "Instalando frontend..."
cd frontend && npm install && cd ..

echo "Instalação completa!"