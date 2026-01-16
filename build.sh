#!/usr/bin/env bash
# exit on error
set -o errexit

echo "--- Starting Build Process ---"
pip install -r requirements.txt

echo "--- Collecting Static Files ---"
python manage.py collectstatic --no-input

echo "--- Running Migrations ---"
python manage.py migrate

# Create superuser if env vars are set
if [[ -n "$DJANGO_SUPERUSER_USERNAME" && -n "$DJANGO_SUPERUSER_PASSWORD" && -n "$DJANGO_SUPERUSER_EMAIL" ]]; then
    echo "--- Creating Superuser ---"
    python manage.py createsuperuser \
        --no-input \
        --username "$DJANGO_SUPERUSER_USERNAME" \
        --email "$DJANGO_SUPERUSER_EMAIL" || echo "Superuser creation failed (maybe already exists)"
fi
echo "--- Build Finished ---"
