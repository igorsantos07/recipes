# Generated by Django 3.0.7 on 2020-06-11 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cookbook', '0052_userpreference_ingredient_decimals'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipeingredient',
            name='amount',
            field=models.DecimalField(decimal_places=16, default=0, max_digits=32),
        ),
    ]
